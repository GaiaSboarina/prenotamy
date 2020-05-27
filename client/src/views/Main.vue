<template>
  <div class="h-screen flex flex-col items-center">
    <nav class="flex flex-row bg-teal-800 w-full py-5 px-3 justify-start items-center">
      <h2 class="text-xl semibold text-white uppercase tracking-wider"> Prenotamy.com </h2>
      <div class="flex flex-row items-center ml-auto text-white font-bold">
        <span v-for='section in sections' class="mx-3">
		<a v-if='section.type == "button"' v-bind:href='section.url' class="p-3  transition duration-200 px-4 bg-teal-700 hover:bg-t		eal-600 cursor-pointer white bold rounded"> {{ section.label }} </a>
          <a v-else v-bind:href='section.url' class="cursor-pointer"> {{ section.label }}  </a>
        </span>
      </div>
    </nav>
    <div class="w-full bg-teal-800 flex flex-col flex-col items-center justify-center py-10">
      <div class="flex flex-row w-8/12 m-10 justify-center ">
        <div v-for="category in categories" class="min-w-1/5  min-h-22 mx-10 flex flex-row items-center justify-between transition duration-200 px-5 py-4 bg-teal-700 hover:bg-teal-600 justify-center cursor-pointer rounded">
          <p class="text-white font-bold m-0"> {{ category.label }} </p>
        </div>
        <div class="divide-y w-full divide-gray-400"></div>
      </div>
      <div class="flex flex-row w-8/12">
        <input class="form-control rounded p-4 py-6 bg-white border rounded-r-none w-10/12" type='text' placeholder="Cerca l'attività di cui hai bisogno e prenota!"/>
        <button class="w-2/12 bg-gray-300 border-none rounded rounded-l-none">
          <i class="fas fa-search text-gray-700"></i>
        </button>
      </div>
    </div>
    <div class="divide-y w-full divide-gray-400"></div>
    <div class="grid grid-flow-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20 w-full px-10 mb-20">
      <div v-for='result in [1,2,3,4,5,6,7,8,9,10]' class=" flex flex-col justify-between rounded-md shadow py-4 px-3 bg-white h-40 w-54">
        <div class="flex flex-row justify-between">
          <h1 class=" text-2xl text-gray-800 semibold"> Nome negozio </h1>
          <div class="flex flex-row">
            <i 
              v-for='star in [1,2,3,4,5]' 
              class="mx-1"
              :class="star > 3 ? 'far fa-star text-yellow-300' : 'fas fa-star text-yellow-300'"
            ></i>
          </div>
        </div>
        <h2 class="text-lg text-gray-600"> Descrizione </h2>
        <p class="text-gray-500"> * note importanti </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main",
  data: () => ({
    path: [],
    sections: [
      {
        type: 'link',
        label: 'Come funziona'
      },
      {
        type: 'link',
        label: 'Accedi',
        url: '/formLogin'
      },
      {
        type: 'button',
        label: 'Iscriviti come Esercente!'
      }
    ],
    categories: [
      {
        icon: '',
        label: 'Palestre'
      },
      {
        icon: '',
        label: 'Centri estetici'
      },
      {
        icon: '',
        label: 'Parrucchieri'
      },
      {
        icon: '',
        label: 'Bar'
      }
    ]
  }),
  beforeMount() {
  },
  methods: {
  },
  components: { },
  watch: {
    $route: {
      handler() {
      }
    }
  }
};
</script>
<style></style>
