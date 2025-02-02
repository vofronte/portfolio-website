import Vue from 'vue';
import axios from 'axios';

const $axios = axios.create({
    baseURL: "https://webdev-api.loftschool.com/"
});

const skill = {
    template: '#skill',
    props: {
        skill: Object
    },
    methods: {
        drawColorCircle() {
            const circle = this.$refs['color-circle'];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue('stroke-dasharray')
            );
    
            const percent = (dashArray / 100) * (100 - this.skill.percent);
            circle.style.strokeDashoffset = percent;
        }
    },
    mounted() {
        this.drawColorCircle();
    }
};

const skillsRow = {
    template: '#skills-row',
    components: {
        skill
    },
    props: ['skill']
};

new Vue({
    el: '#skills-component',
    template: '#skills-list',
    data() {
        return {
            skills: []
        }
    },
    components: {
        skillsRow
    },
    computed: {
        reversedSkills() {
            return this.skills.reverse();
        }
    },
    async created() {
        //забираем из json
        const data = require('../data/skills.json');
        console.log("🚀 ~ data:", data)
        // const {data} = await $axios.get('/categories/272');

        this.skills = data;
    }
});