<?php

namespace App\Http\Controllers;

use App\Models\Lekcija;
use Illuminate\Http\Request;
use App\Http\Resources\LekcijaCollection;
use App\Http\Resources\LekcijaResource;

class LekcijaController extends Controller
{

    public function index()
    {
        return new LekcijaCollection(Lekcija::all());
    }






    public function show(Lekcija $lekcija)
    {
        return new LekcijaResource($lekcija);
    }






}