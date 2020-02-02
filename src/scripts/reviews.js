import Vue from 'vue';
import Flickity from 'vue-flickity';

const review = {
    template: '#review-item',
    props: ['review']
};

new Vue({
    el: '#reviews-component',
    template: '#reviews-container',
    components: {
        Flickity, review
    },

    data() {
        return {
            reviews: [],
            flickityOptions: {
                prevNextButtons: false,
                pageDots: false,
                resize: true,
                groupCells: window.innerWidth > 768 ? 2 : 1,
                cellAlign: 'left'
            }
        }
    },

    methods: {
        next() {
            this.$refs.flickity.next();
        },
        previous() {
            this.$refs.flickity.previous();
        },
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/${item.photo}`);
                item.photo = requiredPic;
                return item;
            });
        }
    },
    created() {
        const data = require('../data/reviews.json');
        this.reviews = this.makeArrWithRequiredImages(data);
        this.reviews = data;
    },
    mounted() {
        $('.reviews-blocks, .reviews__arrows-btns').click(function () {

            if ($('.reviews__item')[0].classList.contains('is-selected')) {
                $('.reviews__arrow-btn--next').addClass('disabled');
            }
            else if ($('.reviews__item')[$('.reviews__item').length - 1].classList.contains('is-selected')) {
                $('.reviews__arrow-btn--prev').addClass('disabled');
            } else {
                $('.reviews__arrow-btn').removeClass('disabled');
            }


        })


    }


});