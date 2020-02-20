<template lang="pug">
.skill__row__item(v-if='editmode === false')
    td.skill__name
        .skill__name-data {{skill.title}}
    td.skill__percent
        .skill__percent-input
            .skill__name-data {{skill.percent}}
    td.skill__controls
        button(
            type='button'
            @click='editmode = true'
            ).block__btn.block__btn--pencil
            svg.block__btn-pencil-icon
                use(xlink:href="sprite.svg#pencil" )
        button(
            type='button'
            @click='removeExistedSkill'
            ).block__btn.block__btn--trash
            svg.block__btn-trash-icon
                use(xlink:href="sprite.svg#trash")

.skill__row__item(v-else)
    td.skill__name
        input.input-basic(
            type='text'
            placeholder='Название навыка'
            v-model='editedSkill.title'
            required
            ).input-basic__skill
    td.skill__percent
        .skill__percent-input
            input.input-basic(
                type='number'
                placeholder='100'
                v-model='editedSkill.percent'
                step="1"
                min="1"
                max="100"
            ).input-basic__skill.input-basic__skill--padding
            .skill__percent-sign %
    td.skill__controls
        button(
            type='button'
            @click='editExistedSkill'
        ).block__btn.block__btn--tick
            svg.block__btn-tick-icon
                use(xlink:href="sprite.svg#tick")
        button(
            type='button'
            @click='editmode = false'
        ).block__btn.block__btn--remove
            svg.block__btn-remove-icon
                use(xlink:href="sprite.svg#cross")
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            editmode: false,
            editedSkill: { ...this.skill }            
        }
    },
    props: {
        skill: Object
    },
    methods: {
        ...mapActions('addSkills', ['removeSkill', 'editSkill']),
        async removeExistedSkill() {
            try {
                await this.removeSkill(this.skill);
            } catch (error) {
                this.showTooltip({
                type: "error",
                text: error.message
        });
            }
        },
        async editExistedSkill() {
            try {
                await this.editSkill(this.editedSkill);
                this.editmode = false;
            } catch (error) {
                this.showTooltip({
                type: "error",
                text: error.message
        });
            }
        }
    }
}
</script>