<script setup>
import ProfileCard from "./components/ProfileCard.vue";
import profilePic from "./assets/profile.png";
import bgPic from "./assets/background.jpg";
const myProfile = {
  background: bgPic,
  profileimg: profilePic,
  name: "Wannawat Siriarkanay",
  subheading: "Student, 20, BKK",
  followers: "475",
  following: "1114",
  projects: "10+",
  facebook: "https://www.facebook.com/wannawat.siriarkanay",
  instagram: "https://www.instagram.com/4thvowelineng/",
  linkedin: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
};
</script>

<template>
  <div class="flex items-center justify-center gap-8 min-h-screen bg-linear-to-br from-green-500 to-sky-400">
    <ProfileCard :profileimg="myProfile.profileimg" :background="myProfile.background" :name="myProfile.name"
      :subheading="myProfile.subheading" :followers="myProfile.followers" :following="myProfile.following"
      :projects="myProfile.projects" />
    <ProfileCard :profileimg="myProfile.profileimg" :background="myProfile.background" :name="myProfile.name"
      :subheading="myProfile.subheading" :facebook="myProfile.facebook" :instagram="myProfile.instagram"
      :linkedin="myProfile.linkedin" />
  </div>
</template>

<style scoped></style>
