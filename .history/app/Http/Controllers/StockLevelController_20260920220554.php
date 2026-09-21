<?php

namespace App\Http\Controllers;

use App\Http\Resources\StockLevelResource;
use App\Models\StockLevel;
use Illuminate\Http\Request;

class StockLevelController extends Controller
{
    public function index(Request $request){
         $stockLevels = StockLevel::query()
            ->when(
                $request->product_id,
                function ($query, $productId) {
                    $query->where('product_id', $productId);
                }
            )
            ->when(
                $request->warehouse_id,
                function ($query, $warehouseId) {
                    $query->where('warehouse_id', $warehouseId);
                }
            )
            ->spaginate($request->per_page ?? 20);

        return StockLevelResource::collection($stockLevels);
    }
}
