<template>
  <q-layout view="hHh lpr fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-avatar>
          <img src="src/components/swedish_flag.png">
        </q-avatar>
        <q-toolbar-title class="text-weight-bold text-center">
          NORREGÅRDEN
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Forside" />
        <q-route-tab to="/booking" label="Booking" />
        <q-route-tab to="/information" label="Information" />
        <q-route-tab to="/gallery" label="Galleri" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
