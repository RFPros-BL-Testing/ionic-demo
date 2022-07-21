import { ref, onMounted, watch } from "vue";
import { isPlatform } from "@ionic/vue";

import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
const scans = ref<any[]>([]);

export function useBarcodeScanner() {
  const hideBackground = () => {
    BarcodeScanner.hideBackground();
    document.body.style.display = "none";
  };

  const showBackground = () => {
    BarcodeScanner.showBackground();
    document.body.style.display = "block";
  };

  const startScan = async () => {
    if (isPlatform("hybrid")) {
      hideBackground();

      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        console.log(result.content);
        scans.value = [result.content, ...scans.value];
      }
      showBackground();
    } else {
      document.body.style.display = "none";
      setTimeout(() => {
        console.log("test", scans);
        scans.value = ["test scan", ...scans.value];
        document.body.style.display = "block";
      }, 1000);
    }
  };
  return {
    startScan,
    scans,
  };
}
