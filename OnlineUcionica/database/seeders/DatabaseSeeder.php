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
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 1
        ]);
        $lekcija2 = Lekcija::create([
            'naziv' => 'Izvori vode i gejziri',
            'tezina' => 2,
            'trajanje' => '20',
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 1
        ]);
        $lekcija3 = Lekcija::create([
            'naziv' => 'Kretanje tektonskih ploca',
            'tezina' => 4,
            'trajanje' => '45',
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 1
        ]);
        $lekcija4 = Lekcija::create([
            'naziv' => 'Jupiterovi sateliti',
            'tezina' => 1,
            'trajanje' => '10',
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 1
        ]);
        $lekcija5 = Lekcija::create([
            'naziv' => 'Demografske odlike Azije',
            'tezina' => 4,
            'trajanje' => '30',
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 1
        ]);
        $lekcija6 = Lekcija::create([
            'naziv' => 'Sedimentne stene',
            'tezina' => 5,
            'trajanje' => '50',
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 1
        ]);
        $lekcija7 = Lekcija::create([
            'naziv' => 'Prvi svetski rat',
            'tezina' => 2,
            'trajanje' => '20',
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 2
        ]);
        $lekcija8 = Lekcija::create([
            'naziv' => 'Egipatske piramide',
            'tezina' => 1,
            'trajanje' => '15',
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 2
        ]);
        $lekcija9 = Lekcija::create([
            'naziv' => 'Istorija kineske civilizacije',
            'tezina' => 4,
            'trajanje' => '35',
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 2
        ]);
        $lekcija10 = Lekcija::create([
            'naziv' => 'Velika seoba naroda',
            'tezina' => 5,
            'trajanje' => '60',
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 2
        ]);
        $lekcija11 = Lekcija::create([
            'naziv' => 'Cezarova osvajanja',
            'tezina' => 3,
            'trajanje' => '40',
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 2
        ]);
        $lekcija12 = Lekcija::create([
            'naziv' => 'Deoba celija',
            'tezina' => 4,
            'trajanje' => '25',
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 3
        ]);
        $lekcija13 = Lekcija::create([
            'naziv' => 'Gmizavci i vodozemci',
            'tezina' => 2,
            'trajanje' => '25',
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 3
        ]);
        $lekcija14 = Lekcija::create([
            'naziv' => 'Razmnozavanje kod golosemenica',
            'tezina' => 5,
            'trajanje' => '25',
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 3
        ]);
        $lekcija15 = Lekcija::create([
            'naziv' => 'Ekosistemi u Srbiji',
            'tezina' => 1,
            'trajanje' => '10',
            'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
            'predmetId' => 3
        ]);


    }
}