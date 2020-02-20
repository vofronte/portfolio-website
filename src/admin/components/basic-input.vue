<template lang="pug">
.div
    input(
        type='text'
        placeholder='Новый навык'
        v-model='editedskill.name'
        @keydown.enter='addNewSkill'
        required
    ).input-basic
    pre {{editedskill}}
</template>

<script>
let uniqId = 0;

export default {
    inheritAttrs: false,
    props: {
        skills: Array
    },
    data() {
        return {
            editedskill: {...this.skills} 
        }
    },
    methods: {
         addNewSkill() {
            //uniqId++;
            //this.newSkill.id = uniqId;
            this.$emit('addNewSkill', {...this.editedskill});
            //this.editedskill.name = '';
          //  this.$emit('addNewSkill', this.$event.target.value);
         }
    }
}
</script>