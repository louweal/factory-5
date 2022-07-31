<template>
  <main>
    <section class="h-100">
      <div class="row min-vh-100 d-flex justify-content-center">
        <div class="col-sm-12 col-lg-6 align-self-center text-center">
          <h1 class="heading-c fs-2">Unknown page or link</h1>

          <p>
            The link you followed doesn't exist (yet). This might be because I'm
            still working on this website or maybe you followed a broken link.
            You can always
            <nuxt-link to="/contact">contact me</nuxt-link> in case you have
            questions.
          </p>

          <p>
            <i class="bi bi-arrow-right-short text-secondary align-middle"></i>
            <nuxt-link to="/"> Go back to the homepage </nuxt-link>
          </p>

          <nuxt-link to="/contact" class="btn btn-secondary">Contact</nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  transition: "fade",
};
</script>
