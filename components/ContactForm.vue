<template>
	<div>
		<p v-if="sent">Your message has been received and I'll get back with you as soon as possible. Thanks!</p>

		<form v-if="!sent" @submit.prevent="handleSubmit">
			<div class="two-col">
				<div class="form-group">
					<label for="first-name">First name</label>
					<input
						id="first-name"
						v-model="formData.firstName"
						type="text"
						placeholder="First name"
						required
					/>
				</div>
				<div class="form-group">
					<label for="last-name">Last name</label>
					<input
						id="last-name"
						v-model="formData.lastName"
						type="text"
						placeholder="Last name"
						required
					/>
				</div>
			</div>

			<div class="form-group">
				<label for="email">Email address</label>
				<input
					id="email"
					v-model="formData.email"
					type="email"
					placeholder="you@company.com"
					required
				/>
			</div>

			<div class="form-group pb-4">
				<label for="message">Message</label>
				<textarea
					id="message"
					v-model="formData.message"
					rows="4"
					placeholder="Your message"
					required
				></textarea>
			</div>

			<button class="submit-button" :disabled="loading" type="submit">
				{{ loading ? 'Sending...' : 'Send message' }}
			</button>
		</form>
	</div>
</template>

<script setup lang="ts">
const mail = useMail()

const formData = reactive({
	firstName: '',
	lastName: '',
	email: '',
	message: '',
})

const sent = ref(false)
const loading = ref(false)

const handleSubmit = () => {
	const { firstName, lastName, email, message } = formData

	if (!firstName || !lastName || !email || !message) {
		alert('Please fill out all required fields.')
		return
	}

	const emailContent = `
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Message: ${message}
  `

	loading.value = true

	mail
		.send({
			to: 'joe@pixelscript.io',
			from: `${firstName} ${lastName} <${email}>`,
			subject: 'Website Inquiry',
			text: emailContent,
		})
		.then(() => {
			sent.value = true
		})
		.catch((err: unknown) => {
			console.error(err)
			alert('Failed to send the message.')
		})
		.finally(() => {
			loading.value = false
		})
}
</script>

<style scoped>
.two-col {
  @apply gap-4;
  @apply grid grid-cols-2 lg:gap-6;
}

.form-group {
  @apply mb-4;
  @apply lg:mb-6 flex flex-col;
}

label {
  @apply text-sm font-medium text-zinc-400;
}

input,
textarea {
  @apply w-full mt-1 px-3 py-2 border bg-zinc-950 border-zinc-900 rounded-[4px] text-zinc-100;
}

input::placeholder,
textarea::placeholder {
  @apply text-zinc-800;
}

input:focus,
textarea:focus {
  @apply border-zinc-700 ring-0 outline-none;
}

.submit-button {
	@apply relative w-full mt-2 py-2.5 bg-zinc-950 text-zinc-50 text-sm font-medium rounded-[4px];
	@apply border border-zinc-800 cursor-pointer;
	@apply transition-colors duration-200;
	animation: submitButtonGlow 3s ease-in-out infinite;
}

.submit-button:hover:not(:disabled) {
	@apply border-ps-blue-100/40 text-white;
}

.submit-button:disabled {
	@apply opacity-60 cursor-not-allowed;
	animation: none;
}

@media (prefers-reduced-motion: reduce) {
	.submit-button {
		animation: none;
		box-shadow: 0 0 0 1px rgb(var(--ps-color-accent-glow-rgb) / 0.2);
	}
}

@keyframes submitButtonGlow {
	0%, 100% {
		box-shadow:
			0 0 0 1px var(--ps-color-glow-soft),
			0 0 12px var(--ps-color-glow-soft);
		border-color: var(--ps-color-neutral-700);
	}

	50% {
		box-shadow:
			0 0 0 1px var(--ps-color-glow-strong),
			0 0 28px rgb(var(--ps-color-accent-glow-rgb) / 0.22),
			inset 0 0 16px rgb(var(--ps-color-accent-glow-rgb) / 0.06);
		border-color: var(--ps-color-glow-strong);
	}
}
</style>
