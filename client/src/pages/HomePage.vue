<template>
    <div class="fon">
        <div class="img_team" >
            <nav-bar></nav-bar>
            <div class="header_img"> 
                <div class="zagolovki__items">
                        <h1 class="teamwork">Командная работа лучше вместе с  KADA </h1>
                        <h2 class="be_more">Будьте более продуктивны с нами!</h2>
                </div>
                <my-button
                @click="$router.push('/create') "
                > 
                    <h1 class="create"> создать рабочую группу</h1>
                </my-button>
            </div>
        </div>

        <div class="content">
            <div class="goals"> 

                <h2 class="our_goals">
                    ПОЧЕМУ МЫ?
                </h2>

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

            <div class="contact__content">

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

.img_team {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("/img/team.png");
    background-size: 100% 100%;
    margin-bottom: 100px;
    height: 430px;
}

.header_img {
    display: flex;
    text-align: left;
    flex-direction: row;
    align-items: center;
    position: relative;
    top: 30%;
}

.zagolovki__items{
    max-width: 80%;
}

.teamwork {
    font-family: 'Advent Pro';
    font-style: normal;
    font-size: 60px;
    text-align: left;
    color: #FFFFFF;
    margin-right: 50px;
}

.be_more {
    font-family: 'Advent Pro';
    font-style: normal;
    font-size: 50px;
    text-align: left;
    color: #ffffff;
}

.content {
    color: white;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-bottom: 100px;
}

.goals {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    max-width: 1440px;
    height: 91px;
    left: 0px;}

.our_goals {
    font-size: 32px;
}

.line {
    max-width: 620px;
    height: 0px;
    border: 1px solid #D9D9D9;
    
}

.three_goals {
    position: relative;
    top: 70px;
    display: flex;
    max-width: 1200px;
}
.goal {
    display: flex;
    flex-direction: column;
    max-width: 335px;
    height: 250px;
    margin-left: 30px;
    background: linear-gradient(175.95deg, #D0CBCB 3.31%, rgba(107, 107, 107, 0) 106.39%);
    border-radius: 8px;
    border-radius: 8px;
    transition: 0.5s;

}

.goal:hover {
    background-color: rgb(194, 194, 194);
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
    height: 158px;
    left: 0px;
    top: 70px;
    display: flex;
    justify-content: center;
    background: #1E1E1E;
}

.contact__content{
    display: flex;
    justify-content: space-between;
    width: 80%;
    min-width: 80%;
}
.contact_us {
    font-size: 24px;
    color: white;
    position: relative;
    max-width: 143px;
    height: 122px;
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
    position: relative;
    max-width: 224px;
    top: 15px;
    height: 70%;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background-color: #454545;
}
::-webkit-scrollbar-thumb {
    background: rgb(121, 121, 121);
}
::-webkit-scrollbar-thumb:hover {
    background: rgb(96, 96, 96);

}

@media screen and (max-device-width: 1600px) {
    .teamwork {
        font-size: 40px;
    }

    .be_more {
        font-size: 40px;
    }

    .create {
        font-size: 20px;
    }

    .goal {
        width: 300px;
        height: 220px;
    }

    .three_goals {
        top: 50px;
    }


    .header {
        font-size: 22px;
        top: 15px;
    }

    .description {
        font-size: 14px;
        top: 20px;
    }

    .img_team {
        height: 330px;
    }
}



</style>