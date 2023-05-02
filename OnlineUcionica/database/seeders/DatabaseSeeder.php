<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\Cas;
use \App\Models\Predmet;
use \App\Models\Lekcija;
use \App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Predmet::truncate();
        Lekcija::truncate();

        $predmet1 = Predmet::create([
            'naziv' => 'Geografija'
        ]);
        $predmet2 = Predmet::create([
            'naziv' => 'Istorija'
        ]);
        $predmet3 = Predmet::create([
            'naziv' => 'Biologija'
        ]);

        $lekcija1 = Lekcija::create([
            'naziv' => 'Populaciona politika Srbije',
            'tezina' => 3,
            'trajanje' => '30',
            'imageUrl' => 'https://www.infocentarjug.rs/wp-content/uploads/2018/10/Porodica-1210x642.jpg',
            'predmetId' => 1
        ]);
        $lekcija2 = Lekcija::create([
            'naziv' => 'Izvori vode i gejziri',
            'tezina' => 2,
            'trajanje' => '20',
            'imageUrl' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Strokkur_geyser_eruption%2C_close-up_view.jpg/640px-Strokkur_geyser_eruption%2C_close-up_view.jpg?%D0%93%D0%B5%D1%98%D0%B7%D0%B5%D1%8025599802',
            'predmetId' => 1
        ]);
        $lekcija3 = Lekcija::create([
            'naziv' => 'Kretanje tektonskih ploca',
            'tezina' => 4,
            'trajanje' => '45',
            'imageUrl' => 'https://ocdn.eu/images/pulscms/ZWY7MDA_/d0c4f2961bfa53820dbf3f95e51f614c.jpg',
            'predmetId' => 1
        ]);
        $lekcija4 = Lekcija::create([
            'naziv' => 'Jupiterovi sateliti',
            'tezina' => 1,
            'trajanje' => '10',
            'imageUrl' => 'https://static.nationalgeographic.rs/Picture/57389/jpeg/jUPITEROVI-SATELITI_1090111031.jpg?ts=2022-11-03T13:33:58',
            'predmetId' => 1
        ]);
        $lekcija5 = Lekcija::create([
            'naziv' => 'Demografske odlike Azije',
            'tezina' => 4,
            'trajanje' => '30',
            'imageUrl' => 'data:image/jpeg;base64,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',
            'predmetId' => 1
        ]);
        $lekcija6 = Lekcija::create([
            'naziv' => 'Sedimentne stene',
            'tezina' => 5,
            'trajanje' => '50',
            'imageUrl' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Stadtroda_Sandstein.jpg/250px-Stadtroda_Sandstein.jpg',
            'predmetId' => 1
        ]);
        $lekcija7 = Lekcija::create([
            'naziv' => 'Prvi svetski rat',
            'tezina' => 2,
            'trajanje' => '20',
            'imageUrl' => 'https://kaleidoskop-media.com/images/post-gallery/kliknasvetlost_1064_71280_full.jpg',
            'predmetId' => 2
        ]);
        $lekcija8 = Lekcija::create([
            'naziv' => 'Egipatske piramide',
            'tezina' => 1,
            'trajanje' => '15',
            'imageUrl' => 'https://static.nationalgeographic.rs/Picture/17345/jpeg/kako_su_nastale_piramide_aps_593266843',
            'predmetId' => 2
        ]);
        $lekcija9 = Lekcija::create([
            'naziv' => 'Istorija kineske civilizacije',
            'tezina' => 4,
            'trajanje' => '35',
            'imageUrl' => 'https://www.dnevno.rs/wp-content/uploads/2018/05/31259-kina.jpg',
            'predmetId' => 2
        ]);
        $lekcija10 = Lekcija::create([
            'naziv' => 'Velika seoba naroda',
            'tezina' => 5,
            'trajanje' => '60',
            'imageUrl' => 'https://upload.wikimedia.org/wikipedia/sr/6/6c/Seoba_Srba.jpg',
            'predmetId' => 2
        ]);
        $lekcija11 = Lekcija::create([
            'naziv' => 'Cezarova osvajanja',
            'tezina' => 3,
            'trajanje' => '40',
            'imageUrl' => 'https://povijest.hr/wp-content/uploads/2016/01/Siege-alesia-vercingetorix-jules-cesar.jpg',
            'predmetId' => 2
        ]);
        $lekcija12 = Lekcija::create([
            'naziv' => 'Deoba celija',
            'tezina' => 4,
            'trajanje' => '25',
            'imageUrl' => 'https://image.slidesharecdn.com/deobaelije-150922183447-lva1-app6892/85/deoba-elije-2-320.jpg?cb=1666045024',
            'predmetId' => 3
        ]);
        $lekcija13 = Lekcija::create([
            'naziv' => 'Gmizavci i vodozemci',
            'tezina' => 2,
            'trajanje' => '25',
            'imageUrl' => 'https://s3.eu-central-1.amazonaws.com/web.repository/biodiverzitet-media-static/categories/2021/474x474/05-vodozemci-gmizavci.png',
            'predmetId' => 3
        ]);
        $lekcija14 = Lekcija::create([
            'naziv' => 'Razmnozavanje kod golosemenica',
            'tezina' => 5,
            'trajanje' => '25',
            'imageUrl' => 'https://zivetisabiljkama.net/wp-content/uploads/2014/07/razmnozavanje.jpg',
            'predmetId' => 3
        ]);
        $lekcija15 = Lekcija::create([
            'naziv' => 'Ekosistemi u Srbiji',
            'tezina' => 1,
            'trajanje' => '10',
            'imageUrl' => 'https://ekospark.com/info/06_biodiverzitet/ekosistem/i/ekosistem.jpg',
            'predmetId' => 3
        ]);


    }
}