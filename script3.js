function silnik(typ, pojemnosc, producent, model, moc) {
    this.type = typ;
    this.volume = pojemnosc;
    this.producer = producent;
    this.model = model;
    this.power = moc;
}

function pojazd(wlasciciel, data_produkcji, marka, model, waga, predkosc_maksymalna, przebieg, sr_zuzycie_paliwa, silnik) {
    this.owner = wlasciciel;
    this.prodDate = data_produkcji;
    this.mark = marka;
    this.model = model;
    this.weight = waga;
    this.maxSpeed = predkosc_maksymalna;
    this.mileage = przebieg;
    this.fuelConsumption = sr_zuzycie_paliwa;
    this.engine = silnik;
      
}
    pojazd.prototype.sprawdzAuto = function() {
        document.write("Wszystkie systemy sprawne, " + this.mark +" "+ this.model + " wyprodukowany w " + this.prodDate + " roku o mocy "+ this.engine.power + " gotowy do jazdy");
};
    pojazd.prototype.obliczCalkowiteZuzyciePaliwa = function () {
    //zwroci calosc paliwa spalonego na przestrzeni lat
};

    pojazd.prototype.obliczIleLatMaAuto = function () {
        //obliczIleLatMaAuto: zwroci wiek auta podany w latach
    };

var silnik1 = new silnik("benzyna", 101, "VAG", "FSI 2.1", 201);
var silnik2 = new silnik("benzyna", 102, "VAG", "FSI 2.2", 202);
var silnik3 = new silnik("benzyna", 103, "VAG", "FSI 2.3", 203);
var silnik4 = new silnik("benzyna", 104, "VAG", "FSI 2.4", 204);
var silnik5 = new silnik("benzyna", 105, "VAG", "FSI 2.5", 205);

var samochod1 = new pojazd("Kamil P", 1991, "volvo", "v10", 9991, 301, 200001, 7.1, silnik1);
var samochod2 = new pojazd("Krzysiek P", 1992, "volvo", "v20", 9992, 302, 200002, 7.2, silnik2);
var samochod3 = new pojazd("asd dsa", 1993, "volvo", "v30", 9993, 303, 200003, 7.3, silnik3);
var samochod4 = new pojazd("qwe zxc", 1994, "volvo", "v40", 9994, 304, 200004, 7.4, silnik4);
var samochod5 = new pojazd("rty fghfgh", 1995, "volvo", "v50", 9995, 305, 200005, 7.5, silnik5);

var tablicaSamochodow = [samochod1, samochod2, samochod3, samochod4, samochod5];

//b) Napisz funkcje, ktora zwroci stringa opisujacego najmocniejsze auto z tablicy: "<imie> <nazwisko> jest wlascicielem najmocniejszego auta - <marka> <model>"


  