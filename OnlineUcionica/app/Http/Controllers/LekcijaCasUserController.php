<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Cas;
use \App\Models\Lekcija;
use App\Http\Resources\CasCollection;

class LekcijaCasUserController extends Controller
{
    public function index($id)
    {
        $cas_items = Cas::get()->where('userId', $id);

        if (count($cas_items) == 0) {
            return response()->json('No data!', 404);
        }

        foreach ($cas_items as $item) {
            $item['lekcija'] = Lekcija::get()->where('id', $item['lekcijaId'])[strval($item['lekcijaId'] - 1)];
        }

        return $cas_items;
    }
}