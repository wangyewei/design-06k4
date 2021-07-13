
interface Radio {
  switchRadio(): void;
}

// interface Battery {

// }

interface RadioWithBattery extends Radio {
  checkBatteryStatus();
}
class Car implements Radio {
  switchRadio() {

  }
}

class Cellphone implements RadioWithBattery {
  switchRadio() {

  }
  checkBatteryStatus() {

  }
}