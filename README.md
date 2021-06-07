# :zap: Ionic Todo App

* App created using the [Ionic 5 framework](https://ionicframework.com/docs), using a firebase cloud database to store to-do data.
* All CRUD operations can be carried out using the Ionic UI.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-todo-app?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-todo-app?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-todo-app?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-todo-app?style=plastic)

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* Note: Angular imports for Firestore are now from '@angular/fire/firestore'.
* Todos are passed to/from the firestore database as [observables](https://angular.io/guide/observables).

## :camera: Screenshots

![todo items shown on ionic frontend and Firestore database](./img/todo_items.png)

## :signal_strength: Technologies

* [Ionic/angular v5](https://ionicframework.com/)
* [Ionic v5](https://ionicframework.com/)
* [Angular v12](https://angular.io/)
* [Firebase cloudstore v8](https://firebase.google.com/)

## :floppy_disk: Setup

* Add firebase access credentials in `environment.ts`
* To start the server on _localhost://8100_ type: 'ionic serve'

## :computer: Code Examples

* It was necessary to clear the setting for the firestore timestampsInSnapshots in app.module.ts - see below.

```typescript
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
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
export class AppModule { }
```

## :cool: Features

**CRUD operations:**

* Create: Click '+' to create a to-do item.
* Read: Line items are displayed on the home page.
* Update: Click on item line to edit.
* Delete: swipe left and a coloured 'DONE' button appears on the right.

## :clipboard: Status & To-do list

* Status: Working. Updated june 2021.
* To-do: Add more detail/styling to front page.

## :clap: Inspiration

* Project inspired by [Simon Grimm´s Youtube video 'How to Create a Simple Ionic 4 App with Firebase and AngularFire'](https://www.youtube.com/watch?v=H20l9ofyR54&t=1375s)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com