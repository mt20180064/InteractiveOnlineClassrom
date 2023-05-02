<?php

namespace App\Http\Controllers;

use App\Models\Predmet;
use Illuminate\Http\Request;
use App\Http\Resources\PredmetCollection;
use App\Http\Resources\PredmetResource;

class PredmetController extends Controller
{

    public function index()
    {
        return new PredmetCollection(Predmet::all());
    }






    public function show(Predmet $predmet)
    {
        return new PredmetResource($predmet);
    }






}