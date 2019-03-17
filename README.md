# Ionic Todo App

App created using the [Ionic 4 framework](https://ionicframework.com/docs), using a firebase cloud database to store to-do data. All CRUD operaations can be carried out using the Ionic UI.

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

Note: Angular imports for Firestore are now from '@angular/fire/firestore'.

Todos are passed to/from the firestore database as [observables](https://angular.io/guide/observables).

## Screenshots

![todo_items shown on ionic frontend and Firestore database](./img/todo_ items.png)

## Technologies

* Ionic/angular - version 4.0.0
* Firebase cloudstore - version 5.8.5

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'

## Code Examples

* It was necessary to clear the setting for the firestore timestampsInSnapshots in app.module.ts - see below.

_import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
@NgModule({
  declarations: [AppComponent],
  imports: [
     ...
     AngularFirestoreModule,
     ...
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }_

## Features

**CRUD operations:**

* Create: Click '+' to create a to-do item.
* Read: Line items are displayed on the home page.
* Update: Click on item line to edit.
* Delete: swipe left and a coloured 'DONE' button appears on the right.

## Status & To-do list

* Status: working basic to-do app.

* To-do: Add more detail/styling to front page.

## Inspiration

Project inspired by [Simon Grimm´s Youtube video 'How to Create a Simple Ionic 4 App with Firebase and AngularFire'](https://www.youtube.com/watch?v=H20l9ofyR54&t=1375s)

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!