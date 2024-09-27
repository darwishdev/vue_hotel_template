<script setup lang="ts">
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';
const handleSubmit = (e: Event) => {
    console.log(e)
}
</script>
<template>
    <form class="glass" @submit.prevent="handleSubmit">
        <fieldset>
            <!-- Name Field -->
            <div class="form-group">
                <label for="name">{{ $t('name') }}</label>
                <InputText fluid id="name" name="name" :placeholder="$t('namePlaceholder')" required />
            </div>

            <!-- Email Field -->
            <div class="form-group">
                <label for="email">{{ $t('email') }}</label>
                <InputText fluid id="email" name="email" type="email" :placeholder="$t('emailPlaceholder')" required />
            </div>

            <!-- Phone Field -->
            <div class="form-group">
                <label for="phone">{{ $t('phone') }}</label>
                <InputText fluid id="phone" name="phone" type="tel" :placeholder="$t('phonePlaceholder')" />
            </div>

            <!-- Message Field -->
            <div class="form-group w-full">
                <label for="message">{{ $t('message') }}</label>
                <Textarea id="message" name="message" rows="5" :placeholder="$t('messagePlaceholder')"
                    required></Textarea>
            </div>

            <!-- Submit Button -->
            <div class="form-group w-full">
                <button type="submit" class="app-btn primary">
                    <i class="pi pi-send" />
                    {{ $t('submit') }}</button>
            </div>
        </fieldset>
    </form>
</template>
<style scoped>
form {
    padding: var(--p-large-gap);
    border-radius: var(--p-border-radius-lg);
}

fieldset {
    display: flex;
    gap: var(--p-large-gap);
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    --p-animation-up-spacing: 50px;

    >div {
        flex-grow: 1;

        .p-inputtext,
        .p-textarea {
            animation: fade-up;
            animation-timeline: view();
        }

        label {
            animation: fade-in;
            animation-timeline: view();

        }
    }
}
</style>
