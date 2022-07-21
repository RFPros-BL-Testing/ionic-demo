<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>BLE {{scanning}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-content>
          <div style="margin: 1em" :key="scan" v-for="scan in devices">
            {{scan.name}} {{scan.id}} {{scan.rssi}} <button type="button" @click="connect(scan.id)">Connect</button>
          </div>
        </ion-card-content>
      </ion-card>
      <ion-card>

        <ion-card-content>
          <div style="margin: 1em" :key="stat" v-for="stat in status">
              {{stat}}
          </div>
        </ion-card-content>
      </ion-card>

        <!-- <ion-row style="height: 50%">
          <ion-col size="12" :key="stat" v-for="stat in status">
            <div style="margin: 1em">
              {{stat}}
            </div>
          </ion-col>
        </ion-row>

      </ion-grid>     -->
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button v-if="!scanning" @click="startScan()">
          <ion-icon :icon="bluetooth"></ion-icon>
        </ion-fab-button>
        <ion-fab-button v-if="scanning" @click="stopScan()">
          <ion-icon :icon="stop"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="clear()">
          <ion-icon :icon="trash"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { stop, bluetooth,trash } from 'ionicons/icons';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonCard } from '@ionic/vue';
import { useBluetoothScanner } from '@/composables/useBluetoothScanner';

export default  defineComponent({
  name: 'Tab1Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonFab, IonCard },
     setup() {
    const { devices,startScan,stopScan,scanning,status,connect,clear } = useBluetoothScanner();

    return {
      devices,
      startScan,
      stopScan,
      bluetooth,
      stop,
      trash,
      scanning,
      status,
      connect,
      clear
    };
  }});
</script>

