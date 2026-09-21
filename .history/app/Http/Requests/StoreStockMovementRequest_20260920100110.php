<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreStockMovementRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
          return [
            'product_id' => [
                'required',
                'integer',
                'exists:products,id',
            ],

            'warehouse_id' => [
                'required',
                'integer',
                'exists:warehouses,id',
            ],

            'type' => [
                'required',
                Rule::in(['in', 'out', 'transfer']),
            ],

            'quantity' => [
                'required',
                'integer',
                'min:1',
            ],

            'reference' => [
                'nullable',
                'string',
                'max:255',
            ],

            'meta' => [
                'nullable',
                'array',
            ],

            'meta.from_warehouse_id' => [
                'required_if:type,transfer',
                'integer',
                'exists:warehouses,id',
            ],

            'meta.to_warehouse_id' => [
                'required_if:type,transfer',
                'integer',
                'exists:warehouses,id',
                'different:meta.from_warehouse_id',
            ],
        ];
    }
}
