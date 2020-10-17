<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>News</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-row>
            <ion-col>
                <ion-card>
                    <ion-card-header>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                    <ion-card-title>Card Title</ion-card-title>
                    <ion-img src="https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg"></ion-img>
                    </ion-card-header>

                    <ion-card-content>
                    Keep close to Nature's heart... and break clear away, once in awhile,
                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </ion-card-content>
                </ion-card>
            </ion-col>
            <ion-col>
                <ion-card>
                    <ion-card-header>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                    <ion-card-title>Card Title</ion-card-title>
                    <ion-img src="https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg"></ion-img>
                    </ion-card-header>

                    <ion-card-content>
                    Keep close to Nature's heart... and break clear away, once in awhile,
                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </ion-card-content>
                </ion-card>
            </ion-col>
            <ion-col>
                <ion-card>
                    <ion-card-header>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                    <ion-card-title>Card Title</ion-card-title>
                    <ion-img src="https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg"></ion-img>
                    </ion-card-header>

                    <ion-card-content>
                    Keep close to Nature's heart... and break clear away, once in awhile,
                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </ion-card-content>
                </ion-card>
            </ion-col>
        </ion-row>   
        <ion-row>
            <ion-col>
                <ion-card>
                    <ion-card-header>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                    <ion-card-title>Card Title</ion-card-title>
                    <ion-img src="https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg"></ion-img>
                    </ion-card-header>

                    <ion-card-content>
                    Keep close to Nature's heart... and break clear away, once in awhile,
                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </ion-card-content>
                </ion-card>
            </ion-col>
            <ion-col>
                <ion-card>
                    <ion-card-header>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                    <ion-card-title>Card Title</ion-card-title>
                    <ion-img src="https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg"></ion-img>
                    </ion-card-header>

                    <ion-card-content>
                    Keep close to Nature's heart... and break clear away, once in awhile,
                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </ion-card-content>
                </ion-card>
            </ion-col>
            <ion-col>
                <ion-card>
                    <ion-card-header>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                    <ion-card-title>Card Title</ion-card-title>
                    <ion-img src="https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg"></ion-img>
                    </ion-card-header>

                    <ion-card-content>
                    Keep close to Nature's heart... and break clear away, once in awhile,
                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </ion-card-content>
                </ion-card>
            </ion-col>
        </ion-row>      
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'News',
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }, 
  setup(){
      const news = [
      {
        title: 'News',
        subtitle: 'New subtitle',
        imgSrc: 'https://www.shutterstock.com/es/image-photo/large-beautiful-drops-transparent-rain-water-668593321',
        content: "Keep close to Nature''s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."
      },
      {
        title: 'News',
        subtitle: 'New subtitle',
        imgSrc: 'https://www.shutterstock.com/es/image-photo/large-beautiful-drops-transparent-rain-water-668593321',
        content: "Keep close to Nature''s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."
      },
      {
        title: 'News',
        subtitle: 'New subtitle',
        imgSrc: 'https://www.shutterstock.com/es/image-photo/large-beautiful-drops-transparent-rain-water-668593321',
        content: "Keep close to Nature''s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."
      },
      {
        title: 'News',
        subtitle: 'New subtitle',
        imgSrc: 'https://www.shutterstock.com/es/image-photo/large-beautiful-drops-transparent-rain-water-668593321',
        content: "Keep close to Nature''s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."
      },
      {
        title: 'News',
        subtitle: 'New subtitle',
        imgSrc: 'https://www.shutterstock.com/es/image-photo/large-beautiful-drops-transparent-rain-water-668593321',
        content: "Keep close to Nature''s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."
      },
      {
        title: 'News',
        subtitle: 'New subtitle',
        imgSrc: 'https://www.shutterstock.com/es/image-photo/large-beautiful-drops-transparent-rain-water-668593321',
        content: "Keep close to Nature''s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."
      }
    ]
  }
});
</script>