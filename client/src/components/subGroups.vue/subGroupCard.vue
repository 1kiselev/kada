<template>
    <div class="subGroup__card">

        <div class="subGroup__content">

            <div class="subGroup__name"> 
                {{ this.subGroup.name }}
            </div>

            <div class="subGroup__task">
                {{ this.subGroup.task }}
            </div>

        </div>

    </div>

</template>


<script>
export default {
    data() {
        return {
            name: 'subGroup-card',
        }
    },
    props: {
        subGroup: {
            type: Object,
            required: true
        }
    }

}

</script>



<style>

.subGroup__card {

position: relative;
width: 300px;
height: 88px;
display: flex;
align-items: center;
background: #131212;
border-radius: 8px;
padding-left: 20px;
margin-bottom: 10px;
cursor: pointer;
transition: background 0.3s;
}

.subGroup__card:hover {
    background: #312e2e;

}

.subGroup__content {
    display: flex;
    align-items: center;
}
    
.subGroup__name {
font-family: 'Advent Pro';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 18px;
color: #FFFFFF;
margin-right: 10px;
}
.subGroup__task {
    font-family: 'Advent Pro';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
color: #f5cf13;
}

</style>