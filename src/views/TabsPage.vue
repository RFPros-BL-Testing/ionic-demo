<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/ble">
          <ion-icon :icon="bluetooth" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/photos">
          <ion-icon :icon="images" />
          <ion-label>Photos</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/scanner">
          <ion-icon :icon="qrCode" />
          <ion-label>Scanner</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { images, qrCode, bluetooth } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      images, 
      qrCode, 
      bluetooth
    }
  }
});
</script>
