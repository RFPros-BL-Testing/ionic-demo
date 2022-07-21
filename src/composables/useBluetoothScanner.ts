import { ref } from "vue";
import { BLE } from "@awesome-cordova-plugins/ble";
import { isPlatform } from "@ionic/vue";

const devices = ref<any[]>([]);
const scanning = ref(false);
const status = ref<any[]>([]);

export function useBluetoothScanner() {
  const startScan = () => {
    scanning.value = true;
    if (isPlatform("hybrid")) {
      BLE.startScan([]).subscribe((device: any) => {
        console.log("device", device.name);
        // devices.value.push(device);

        const bufView = new Int16Array(device.advertising);

        console.log(bufView[0], bufView[1], bufView[2]);
        if (
          bufView[0] === 258 && // 0x0201
          bufView[1] === 6918 && //0x061b
          bufView[2] === 30719 // 0xff77
        ) {
          console.log("this is a bt510");
          const deviceItem = {
            name: device.name,
            rssi: device.rssi,
            id: device.id,
          };
          devices.value.push(deviceItem);
        }
      });
    } else {
      const deviceItem = {
        name: "test name",
        rssi: -80,
        id: "01:02:03:04:05:06",
        data: "0201061BFF77",
      };
      devices.value.push(deviceItem);
    }
    status.value.push(`start scan`);
  };

  const stopScan = () => {
    scanning.value = false;
    if (isPlatform("hybrid")) {
      BLE.stopScan().then((something: any) => {
        console.log(something);
      });
    }
    console.log(scanning.value);
    status.value.push(`stop scan`);
  };

  const connect = (deviceId: string) => {
    stopScan();
    if (isPlatform("hybrid")) {
      BLE.connect(deviceId).subscribe({
        next: (peripheral) => {
          status.value.push(peripheral);
        },
        error: (error) => {
          status.value.push(error);
        },
      });
    } else {
      status.value.push(`connect to ${deviceId}`);
    }
  };

  const clear = () => {
    status.value.length = 0;
    devices.value.length = 0;
  };

  return {
    startScan,
    stopScan,
    devices,
    scanning,
    connect,
    status,
    clear,
  };
}
