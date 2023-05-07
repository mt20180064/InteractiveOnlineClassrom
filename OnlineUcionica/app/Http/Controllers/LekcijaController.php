<?php

namespace App\Http\Controllers;

use App\Models\Lekcija;
use Illuminate\Http\Request;
use App\Http\Resources\LekcijaCollection;
use App\Http\Resources\LekcijaResource;
use Illuminate\Support\Facades\Validator;

class LekcijaController extends Controller
{

    public function index()
    {
        return new LekcijaCollection(Lekcija::all());
    }




    public function store(Request $request)
    {
        $lekcija = Lekcija::create([
            'naziv' => $request->naziv,
            'trajanje' => $request->trajanje,
            'tezina' => $request->tezina,
            'imageUrl' => $request->imageUrl,
            'predmetId' => $request->predmetId

        ]);

        $lekcija->save();

        return response()->json(['Lekcija je uspesno kreiran.', new LekcijaResource($lekcija), 'success' => true]);
    }

    public function update(Request $request, $id)
    {
        $lekcija = lekcija::find($id);

        $validator = Validator::make($request->all(), [
            'naziv' => 'string|max:50',
            'trajanje' => 'integer|max:255',
            //'predmetId' => '',
            'tezina' => '',
            'imageUrl' => 'string'
        ]);

        if ($validator->fails())
            return response()->json($validator->errors());


        $lekcija->naziv = $request->naziv;
        $lekcija->trajanje = $request->trajanje;
        $lekcija->imageUrl = $request->imageUrl;
        //$lekcija->predmetId = $request->predmetId;
        $lekcija->tezina = $request->tezina;

        $lekcija->save();

        return response()->json(['lekcija uspesno promenjena.', new LekcijaResource($lekcija), 'success' => true]);
    }


    public function show(Lekcija $lekcija)
    {
        return new LekcijaResource($lekcija);
    }

    public function destroy(Lekcija $lekcija)
    {
        $lekcija->delete();
        return response()->json('lekcija je obrisana.');
    }





}