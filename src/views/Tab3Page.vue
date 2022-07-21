<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Scanner</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid v-if="scans.length == 0">
        <div style="margin: 3em auto; width: 50%; text-align: center; font-size: 1.2em;">Use the QR Code button to scan a code.</div>
      </ion-grid>
      <ion-grid v-if="scans.length > 0">
        <ion-row>
          <ion-col size="3" :key="scan" v-for="scan in scans">
            <div style="margin: 1em">
              {{scan}}
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="startScan()">
          <ion-icon :icon="qrCode"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { camera, heart, qrCode } from 'ionicons/icons';
import { IonFab, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid } from '@ionic/vue';
import { useBarcodeScanner } from '@/composables/useBarcodeScanner';


export default defineComponent({
  name: 'Tab3Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonFab, IonGrid },
   setup() {
    const {startScan, scans} = useBarcodeScanner();
    return {
      startScan,
      scans,
      camera,
      qrCode
    };
  }
});
</script>
