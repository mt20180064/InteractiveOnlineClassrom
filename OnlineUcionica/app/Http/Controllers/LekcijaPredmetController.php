<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Lekcija;
use App\Http\Resources\LekcijaCollection;

class LekcijaPredmetController extends Controller
{
    public function index($id)
    {
        $lekcije = Lekcija::get()->where('predmetId', $id);

        if (count($lekcije) == 0) {
            return response()->json('No data!', 404);
        }

        return new LekcijaCollection($lekcije);
    }
}