<template>
    <div class="recent-message d-flex px-4 py-3">
        <div class="name ms-4">
            <h5 class="mb-1">{{ location.name }}</h5>
            <h6 class="text-muted mb-0">Region: {{ location.region }}</h6>
            <h6 class="text-muted mb-0">Country: {{ location.country }}</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: {
        location: Object
    },
};
</script>