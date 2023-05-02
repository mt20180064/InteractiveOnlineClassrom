<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Lekcija;
use \App\Models\Predmet;
use App\Http\Resources\PredmetCollection;

class PredmetLekcijaController extends Controller
{
    public function index($id)
    {
        $lekcija = Lekcija::get()->where('id', $id);
        $preId = $lekcija[strval($id - 1)]['predmetId'];
        $predmet = Predmet::get()->where('id', $preId);

        if (count($lekcija) == 0) {
            return response()->json('No data!', 404);
        }

        return $predmet[strval($preId - 1)];
    }
}