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
            'imageUrl' => "https://www.infocentarjug.rs/wp-content/uploads/2018/10/Porodica-1210x642.jpg",
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
            'imageUrl' => 'https://srpskacafe.com/wp-content/uploads/2019/03/jupiterovi-sateliti.jpg',
            'predmetId' => 1
        ]);
        $lekcija5 = Lekcija::create([
            'naziv' => 'Demografske odlike Azije',
            'tezina' => 4,
            'trajanje' => '30',
            'imageUrl' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Asia_on_the_globe_%28red%29.svg/800px-Asia_on_the_globe_%28red%29.svg.png',
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
            'imageUrl' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Abies_koreana_(szyszki).JPG/1200px-Abies_koreana_(szyszki).JPG',
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