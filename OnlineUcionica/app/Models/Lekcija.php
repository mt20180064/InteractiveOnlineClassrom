<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \App\Models\Predmet;
use \App\Models\Cas;

class Lekcija extends Model
{
    protected $table = 'lekcije';
    public $primaryKey = 'id';


    protected $fillable = ['naziv', 'trajanje', 'tezina', 'imageUrl', 'predmetId'];
    public function predmet()
    {
        return $this->belongsTo(Predmet::class);
    }

    public function cas()
    {
        return $this->belongsTo(Cas::class);
    }
}