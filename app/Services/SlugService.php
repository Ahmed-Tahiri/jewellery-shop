<?php

namespace App\Services;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class SlugService
{
    /**
     * Generate a unique slug for a model.
     *
     * @param string $name
     * @param string $modelClass  The model class (e.g., Product::class)
     * @param string $column      The column to check uniqueness (default: slug)
     * @param int|null $ignoreId  The record ID to ignore (for updates)
     * @return string
     */
    public function createSlug(string $name, string $modelClass, string $column = 'slug', ?int $ignoreId = null): string
    {
        $slug = Str::slug($name);
        $originalSlug = $slug;
        $counter = 1;

        while (
            $modelClass::where($column, $slug)
            ->when($ignoreId, fn($q) => $q->where('id', '!=', $ignoreId))
            ->exists()
        ) {
            $slug = "{$originalSlug}-{$counter}";
            $counter++;
        }

        return $slug;
    }
}
