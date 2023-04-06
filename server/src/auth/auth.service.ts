import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import {User} from "../users/users.model";
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
        private jwtService: JwtService){}    

    async login(userDto: LoginUserDto){
        console.log(userDto)
        const user = await this.validateUser(userDto)
        return {
            token: this.generateToken(user),
            username: user.username,
        } 
    }

    async registration(userDto: CreateUserDto){
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if(candidate){
            throw new HttpException('Пользователь стаким email уже существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return {
            token: this.generateToken(user)
        }
    }

    async generateToken(user: User){
        const payload = { email: user.email, id: user.id, roles: user.roles } 
        return this.jwtService.sign(payload)
    }

    private async validateUser(userDto: LoginUserDto){
        const user = await this.userService.getUserByEmail(userDto.email);
        // console.log(user)
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals){
            return user;
        }
        throw new UnauthorizedException({ message: 'Некорректный email или пароль' });
    }
}
