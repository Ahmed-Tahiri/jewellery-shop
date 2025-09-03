<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\DB;

class UniqueSubcategory implements ValidationRule
{
    protected $parentId;
    protected $ignoreId;

    public function __construct($parentId, $ignoreId = null)
    {
        $this->parentId = $parentId;
        $this->ignoreId = $ignoreId;
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $query = DB::table('sub_categories')
            ->where('name', $value)
            ->where('parent_id', $this->parentId);

        if ($this->ignoreId) {
            $query->where('id', '!=', $this->ignoreId);
        }

        if ($query->exists()) {
            $fail("The subcategory name has already been taken for this parent.");
        }
    }
}
