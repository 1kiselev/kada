<template>
    <div class="fon">

        <div class="img_team" >
            <nav-bar></nav-bar>
            <div class="header_img"> 
                <h1 class="teamwork">Командная работа лучше вместе с KADA</h1>
                <h2 class="be_more">будьте более продуктивны с нами!</h2>
            </div>
        </div>

        <div class="content">
            <my-button
            @click="$router.push('/create') "
            > 
                <h1 class="create"> создать рабочую группу</h1>
            </my-button>

            <div class="goals"> 
                <div class="line"></div>

                <h2 class="our_goals">
                    наши цели
                </h2>

                <div class="line"></div>
            </div>

            <div class="three_goals">

                <div class="goal">
                    <h1 class="header">
                        Простота и удобство
                    </h1>
                    <div class="description">
                        Главным отличием нашего продукта от аналогов должны быть именно два этих качества. Важно чтобы платформой могли пользоваться абсолютно все и чтобы организовать группу людей было также просто как и создать групповой чат во ВКонтакте или Телеграм
                    </div>
                </div>

                <div class="goal">
                    <h1 class="header">
                        Универсальность
                    </h1>
                    <div class="description">
                        Платформа должна быть актуальна как для простых небольших проектов, таких как организация семейной поездки или процесса взаимодействия между преподователем и группой студентов в процессе обучения, так и для серьезных проектов, таких как разработка сложного программного обеспечения или организация работы профессионального коллектива
                    </div>
                </div>

                <div class="goal">
                    <h1 class="header">
                        Качество
                    </h1>
                    <div class="description">
                        Для участников данный проект - это в первую очередь возможность   продемонстрировать свои навыки, а также приобрести новые. Поэтому главную роль играют качественные характеристики продукта(качество кода, дизайна, функицонала)
                    </div>
                </div>
            </div>
            
        </div>

        <div class="contact">

            <div class="contact_us">
                <div class="header_contact"> Связь с нами</div>
                <div class="david"> @david</div>
                <div class="sanya"> @sanya</div>
            </div>

            <div class="social_networks">
                <div class="social_header"> Социальные сети </div>
                <div class="vk"> vk</div>
                <div class="telegram"> telegram</div>
            </div>

        </div>


    </div>

</template>


<script>
import MyButton from "@/components/UI/MyButton.vue";
import NavBar from "@/components/NavBar.vue";


export default {
    components: {
        MyButton,
        NavBar,
    }
}

</script>



<style>

.fon {
    min-width: 100%;
    background-color: rgba(17, 17, 17, 1);

}

/*  кнопка  */
.create {
    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
}
/* imt _team  */

.img_team {
    width: 1900px;
    height: 432px;
    left: 0px;
    top: 0px;
    background-image: url("/img/team.png");
}

.header_img {
    display: flex;
    top: 134px;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.teamwork {
    width: 1200px;
    height: 84px;
    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    text-align: center;
    color: #FFFFFF;
}

.be_more {
    width: 950px;
    height: 86px;
    font-family: 'Advent Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 77px;
    text-align: center;
    color: #ffffff;
}

/* сам контен */

.content {
    color: white;
    height: 582px;
    width: 1900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 58px;

}

.goals {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 1440px;
    height: 91px;
    left: 0px;
    top: 58px;

}

.our_goals {
    font-size: 32px;
}

.line {
    width: 620px;
    height: 0px;
    border: 1px solid #D9D9D9;
    
}

.three_goals {
    position: relative;
    top: 100px;
    display: flex;
    justify-content: space-between;
    width: 1200px;
}
.goal {
    display: flex;
    flex-direction: column;
    width: 335px;
    height: 250px;
    background: #D9D9D9;
    border-radius: 8px;
    transition: 0.5s;

    
    -webkit-box-shadow: 4px 4px 19px 4px rgba(255, 255, 255, 0.29);
    -moz-box-shadow: 4px 4px 19px 4px rgba(255, 255, 255, 0.29);
    box-shadow: 4px 4px 19px 4px rgba(255, 255, 255, 0.29);
}

.goal:hover {
    -webkit-box-shadow: 4px 4px 19px 7px rgba(255, 255, 255, 0.51);
-moz-box-shadow: 4px 4px 19px 7px rgba(255, 255, 255, 0.51);
box-shadow: 4px 4px 19px 7px rgba(255, 255, 255, 0.51);
    }

.header {
    display: flex;
    justify-content: center;
    top: 20px;
    position: relative;
    font-size: 24px;
    color: #111111;
}

.description {
    padding: 10px;
    position: relative;
    top: 30px;
    font-size: 16px;
    color: #111111;
    font-weight: 600;

}

/* контакты   */

.contact {
    position: relative;
    height: 158px;
    left: 0px;
    top: 70px;
    background: #1E1E1E;
}

.contact_us {
    font-size: 24px;
    color: white;
    position: relative;
    width: 143px;
    height: 122px;
    left: 446px;
    top: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.social_networks {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 24px;
    color: white;

    position: absolute;
    width: 224px;
    height: 127px;
    left: 1317px;
    top: 30px;


}


</style>