<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Bonsai
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/bonsai" class="nav-link">All Bonsais</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/category/outdoor" class="nav-link">Outdoor Bonsai</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/category/indoor" class="nav-link">Indoor Bonsai</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/category/care" class="nav-link">Bonsai Care</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/account" class="nav-link">Account</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <RouterView />
</template>