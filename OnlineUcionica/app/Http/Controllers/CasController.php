<?php

namespace App\Http\Controllers;

use App\Models\Cas;
use Illuminate\Http\Request;
use App\Http\Resources\CasCollection;
use App\Http\Resources\CasResource;

class CasController extends Controller
{

    public function index()
    {
        return new CasCollection(Cas::all());
    }




    public function store(Request $request)
    {
        $cas_item = Cas::create([
            'lekcijaId' => $request->lekcijaId,
            'userId' => $request->userId
        ]);

        $cas_item->save();

        return response()->json(['Cas je uspesno kreiran.', new CasResource($cas_item)]);
    }


    public function show(Cas $cas)
    {
        return new CasResource($cas);
    }






    public function destroy(Cas $cas)
    {
        $cas->delete();
        return response()->json('Cas je obrisan.');
    }
}