<template>
  <div id="page">
    <div id="page-content">
      <div id="subpage-bg"></div>

      <div id="page-content-container">
        <h1>Contact</h1>
        <p class="lead">Let's connect and create something amazing together. Email me directly at <a href="mailto:joe@pixelscript.io">joe@pixelscript.io</a>.</p>
        <hr class="page-divider-short" />

				<p v-if="sent">Your message has been received and I'll get back with you as soon as possible. Thanks!</p>

        <form @submit.prevent="handleSubmit" v-if="!sent">
  <div class="two-col">
    <div class="form-group">
      <label for="first-name">First name</label>
      <input
        type="text"
        id="first-name"
        v-model="formData.firstName"
        placeholder="First name"
        required
      />
    </div>
    <div class="form-group">
      <label for="last-name">Last name</label>
      <input
        type="text"
        id="last-name"
        v-model="formData.lastName"
        placeholder="Last name"
        required
      />
    </div>
  </div>

  <div class="form-group">
    <label for="email">Email address</label>
    <input
      type="email"
      id="email"
      v-model="formData.email"
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

  <!-- <h2 class="mb-4">Services</h2>
  <div class="form-group-checkbox">
    <input
      type="checkbox"
      id="product-design"
      v-model="formData.services.productDesign"
    />
    <label for="product-design">Product Design</label>
  </div>
  <div class="form-group-checkbox">
    <input
      type="checkbox"
      id="frontend"
      v-model="formData.services.frontend"
    />
    <label for="frontend">Front End Development</label>
  </div>
  <div class="form-group-checkbox">
    <input
      type="checkbox"
      id="mentorship"
      v-model="formData.services.mentorship"
    />
    <label for="mentorship">Mentorship &amp; Coaching</label>
  </div>
  <div class="form-group-checkbox">
    <input
      type="checkbox"
      id="other"
      v-model="formData.services.other"
    />
    <label for="other">Other</label>
  </div> -->

  <button :disabled="loading" type="submit">
    {{ loading ? 'Sending...' : 'Send message' }}
  </button>
</form>
      </div>
    </div>
  </div>
</template>

<script setup>
  useSeoMeta({
		title: 'PixelScript - Contact',
		ogTitle: 'PixelScript - Contact',
		description: 'Send Joe Berthelot a message to start a conversation about your next project.',
		ogDescription: 'Send Joe Berthelot a message to start a conversation about your next project.',
	})

const mail = useMail();

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  // services: {
  //   productDesign: false,
  //   frontend: false,
  //   mentorship: false,
  //   other: false,
  // },
});

const sent = ref(false);
const loading = ref(false);

const handleSubmit = () => {
  const { firstName, lastName, email, message } = formData;

  // Ensure required fields are filled
  if (!firstName || !lastName || !email || !message) {
    alert('Please fill out all required fields.');
    return;
  }

  // const selectedServices = Object.keys(formData.services)
  //   .filter((key) => formData.services[key])
  //   .join(', ');

  const emailContent = `
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Message: ${message}
    Services: ${selectedServices || 'None'}
  `;

  loading.value = true;

  mail
    .send({
      to: 'joe@pixelscript.io',
      from: `${firstName} ${lastName} <${email}>`,
      subject: 'Website Inquiry',
      text: emailContent,
    })
    .then(() => {
      sent.value = true;
    })
    .catch((err) => {
      console.error(err);
      alert('Failed to send the message.');
    })
    .finally(() => {
      loading.value = false;
    });
};

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

.form-group-checkbox {
  @apply flex items-center space-x-2 py-1;
}

input[type="checkbox"] {
  @apply w-auto mt-0 cursor-pointer;
}

label {
  @apply text-sm font-medium text-zinc-400;
}

input,
textarea {
  @apply w-full mt-1 px-3 py-2 border bg-zinc-950 border-zinc-900 rounded-[4px] text-zinc-100;
}

/* Placeholder */
input::placeholder,
textarea::placeholder {
  @apply text-zinc-800;
}

input:focus,
textarea:focus {
  @apply border-zinc-700 ring-0 outline-none;
}

button {
  @apply w-full mt-2 py-2 bg-ps-blue-100 text-white text-sm font-medium rounded-[4px];
	@apply hover:bg-ps-blue-100/90 transition-all duration-100;
}
</style>
