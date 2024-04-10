<template>
    <section class="intro">
      <div class="bg-image vh-100" style="background-color: #F5DF4D;">
        <div class="mask d-flex align-items-center h-100" >
          <MDBContainer>
            <MDBRow>
              <MDBCol md="10" lg="8" xl="7" class="mx-auto">
                <MDBCard class="mb-2">
                  <MDBCardBody class="d-flex justify-content-between py-2">
                    <MDBInput v-model="inputValue" inputGroup="lg" :formOutline="false" class="form-control rounded" placeholder="Search">
                      <template #prepend>
                          <span class="input-group-text border-0 px-1" id="basic-addon2"><i class="fas fa-search fa-lg" style="color: #939597;"></i></span>
                        </template>
                    </MDBInput>
                    <p class="mb-0 d-flex flex-row align-self-center" style="color: #939597;"><span class="font-weight-bold pe-1">108 </span>results</p>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard>
                  <MDBCardBody class="p-4">
                    <h6 class="mt-3 mb-4" style="color: #939597;">Filter </h6>
                    <MDBRow>
                      
                      <MDBCol md="4" class="mb-3">
                        <Dropdown v-model="selectedInterest" variant="filled" :options="interests" showClear optionLabel="name" placeholder="Select Type" class="w-full" />
                      </MDBCol> 

                      <MDBCol md="4" class="mb-3">
                        <Dropdown v-model="selectedPrice" :options="prices" showClear optionLabel="name" placeholder="Select Price" class="w-full md:w-14rem" />
                      </MDBCol>

                      <MDBCol md="4" class="mb-3">
                        <Dropdown v-model="selectedLocation" :options="locations" showClear optionLabel="name" placeholder="Select Area" class="w-full md:w-14rem" />
                      </MDBCol>

                    </MDBRow>

                    <div class="d-flex justify-content-between align-items-center mt-4">
                      <div>
                        <MDBBtn color="dark" rounded >Search</MDBBtn>
                        <MDBBtn color="link" rounded style="color: #939597;">Delete</MDBBtn>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            
          </MDBContainer>
          
        </div>
      </div>
    </section>
</template>

<script>
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBBtn
} from "mdb-vue-ui-kit";

import Dropdown from 'primevue/dropdown';

import {
ref
} from "vue"

export default {
name: "App",
components: {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBBtn

},
setup() {
    const inputValue = ref("");

    const dropdown3 = ref(false);
    const selectedInterest = ref();
    const selectedPrice = ref();
    const selectedLocation = ref();
    const interests = [
        { name: "Arts & Craft"},
        { name: "Cooking"},
        { name: "Culture"},
        { name: "Photography"},
        { name: "Music"},
        { name: "Sports"},
        { name: "Technology"},
        { name: "Wellness"},
    ];
    const prices = [
        { name: "Free"},
        { name: "Below $10"},
        { name: "Below $20"},
        { name: "Below $30"},
        { name: "Below $40"},
        { name: "Above $40"},

    ];
    const locations = [
        { name: "Central"},
        { name: "East"},
        { name: "North"},
        { name: "North East"},
        { name: "West"},
    ];
    return {
        inputValue,
        dropdown3,
        selectedInterest,
        selectedPrice,
        selectedLocation,
        interests,
        prices,
        locations   

    }
}
}; 

</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
.fw-900 {
  font-weight: 900;
}

html,
body,
.intro {
  height: 100%;
}

.form-control {
  border-color: transparent;
}

.input-group>.form-control:focus {
  border-color: transparent;
  box-shadow: inset 0 0 0 1px transparent;
}
.btn-link:hover {
  background-color: rgba(0,0,0,.05);
}
.btn-link:active, .btn-link.active {
  background-color: rgba(0,0,0,.05);
}
.btn-link:focus, .btn-link.focus {
  background-color: rgba(0,0,0,.05);
}
.btn-link:active:focus, .btn-link.active:focus {
  background-color: rgba(0,0,0,.05);
}
</style>
  