<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClientCase extends Model
{
    use HasFactory;

    protected $fillable = [
        'created_by',
        'full_name',
        'nationality',
        'passport',
        'birth_date',
        'case_number',
        'notes',
        'notes_en',
    ];

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
