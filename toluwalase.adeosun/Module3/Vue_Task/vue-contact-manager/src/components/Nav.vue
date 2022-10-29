<template>
  <nav className="w-1/3 ">
    <ul className="w-full flex justify-between p-3 space-x-4">
      <a className="flex items-center" to="/">
        <i className="text-[white] pr-[2px] fa fa-home"></i>
        <li>Home</li>
      </a>
      <a className="flex items-center" to="/">
        <i className="text-[white] pr-[2px] fa-regular fa-sim-cards"></i>
        <li>Add</li>
      </a>
      <a className="flex items-center" to="/">
        <i className="text-[white] pr-[2px] fa-regular fa-circle-question"></i>
        <li>About</li>
      </a>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>
