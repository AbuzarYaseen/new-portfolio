// import * as adobeXd from "./skills/adobe-xd.svg";
// import adobeaudition from "./skills/adobeaudition.svg";
// import afterEffects from "./skills/after-effects.svg";
// import aws from "./skills/aws.svg";
// import azure from "./skills/azure.svg";
// import blender from "./skills/blender.svg";
// import bulma from "./skills/bulma.svg";
// import canva from "./skills/canva.svg";
// import capacitorjs from "./skills/capacitorjs.svg";
// import coffeescript from "./skills/coffeescript.svg";
// import deno from "./skills/deno.svg";
// import django from "./skills/django.svg";
// import fastify from "./skills/fastify.svg";
// import gimp from "./skills/gimp.svg";
// import go from "./skills/go.svg";
// import graphql from "./skills/graphql.svg";
// import haxe from "./skills/haxe.svg";
// import java from "./skills/java.svg";
// import julia from "./skills/julia.svg";
// import kotlin from "./skills/kotlin.svg";
// import lightroom from "./skills/lightroom.svg";
// import markdown from "./skills/markdown.svg";
// import matlab from "./skills/matlab.svg";
// import memsql from "./skills/memsql.svg";
// import microsoftoffice from "./skills/microsoftoffice.svg";
// import nginx from "./skills/nginx.svg";
// import numpy from "./skills/numpy.svg";
// import opencv from "./skills/opencv.svg";
// import php from "./skills/php.svg";
// import picsart from "./skills/picsart.svg";
// import premierepro from "./skills/premierepro.svg";
// import python from "./skills/python.svg";
// import pytorch from "./skills/pytorch.svg";
// import ruby from "./skills/ruby.svg";
// import selenium from "./skills/selenium.svg";
// import sketch from "./skills/sketch.svg";
// import strapi from "./skills/strapi.svg";
// import svelte from "./skills/svelte.svg";
// import swift from "./skills/swift.svg";
// import tensorflow from "./skills/tensorflow.svg";
// import unity from "./skills/unity.svg";
// import webix from "./skills/webix.svg";
// import wolframalpha from "./skills/wolframalpha.svg";
// import wordpress from "./skills/wordpress.svg";
// import laravel from "./skills/laravel.svg";
// import fastapi from "./skills/fastapi.svg";
// import restapi from "./skills/api.svg";
// import datascience from "./skills/datascience.svg";
// import redis from "./skills/redis.svg";
// import elixir from "./skills/elixir.svg";
// import jenkins from "./skills/jenkins.svg";
// import phoenix from "./skills/phoenix.svg";
// import microservices from "./skills/microservices.svg";
import react from "./skills/react.svg";
import materialui from "./skills/materialui.svg";
import javascript from "./skills/javascript.svg";
import html from "./skills/html.svg";
import ionic from "./skills/ionic.svg";
import bootstrap from "./skills/bootstrap.svg";
import tailwind from "./skills/tailwind.svg";
import typescript from "./skills/typescript.svg";
import saas from "./skills/cloud.svg";
import vitejs from "./skills/vitejs.svg";
import cplusplus from "./skills/cplusplus.svg";
import css from "./skills/css.svg";
import dart from "./skills/dart.svg";
import mysql from "./skills/mysql.svg";
import nextJS from "./skills/nextJS.svg";
import figma from "./skills/figma.svg";
import firebase from "./skills/firebase.svg";
import git from "./skills/git.svg";
import office from "./skills/microsoftoffice.svg";
import sanity from "./skills/sanity.svg";
// import illustrator from "./skills/illustrator.svg";
// import c from "./skills/c.svg";
// import photoshop from "./skills/photoshop.svg";
// import flask from "./skills/flask.svg";
// import postgresql from "./skills/postgresql.svg";
// import angular from "./skills/angular.svg";
// import nodejs from "./skills/node.svg";
// import vue from "./skills/vue.svg";
// import nuxtJS from "./skills/nuxtJS.svg";
// import csharp from "./skills/csharp.svg";
// import docker from "./skills/docker.svg";
// import vuetifyjs from "./skills/vuetifyjs.svg";
// import mongoDB from "./skills/mongoDB.svg";
// import flutter from "./skills/flutter.svg";
// import gcp from "./skills/gcp.svg";

const skillIcons = {
  nodejs,
  saas,
  // flask,
  office,
  sanity,
  // gcp,
  html,
  // photoshop,
  // docker,
  // illustrator,
  css,
  // angular,
  javascript,
  "next js": nextJS,
  // "nuxt js": nuxtJS,
  react,
  reactjs: react,
  typescript,
  // vue,
  bootstrap,
  // mongodb: mongoDB,
  mysql,
  // postgresql,
  tailwind,
  vitejs,
  vuetifyjs,
  // c,
  "c++": cplusplus,
  // "c#": csharp,
  dart,
  firebase,
  git,
  materialui,
  figma,
  sanity,
  // flutter,
  ionic,
  // microservices,
  // phoenix,
  // jenkins,
  // elixir,
  // redis,
  // datascience,
  // fastapi,
  // restapi,
  // laravel,
  // "adobe xd": adobeXd,
  // "after effects": afterEffects,
  // "react native": react,
  // svelte,
  // bulma,
  // capacitorjs,
  // coffeescript,
  // memsql,
  // go,
  // java,
  // kotlin,
  // julia,
  // matlab,
  // php,
  // python,
  // ruby,
  // swift,
  // "adobe audition": adobeaudition,
  // aws,
  // deno,
  // django,
  // "django rest framework":django,
  // gimp,
  // graphql,
  // lightroom,
  // nginx,
  // numpy,
  // opencv,
  // "premiere pro": premierepro,
  // pytorch,
  // selenium,
  // strapi,
  // tensorflow,
  // webix,
  // wordpress,
  // azure,
  // blender,
  // fastify,
  // haxe,
  // markdown,
  // "microsoft office": microsoftoffice,
  // picsart,
  // sketch,
  // unity,
  // wolframalpha,
  // canva,
};

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  console.log(skillID);
  return skillIcons[skillID] || null;
};
