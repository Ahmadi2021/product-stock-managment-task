<?php

namespace App\Http\Controllers;

use App\Http\Resources\StockLevelResource;
use Illuminate\Http\Request;

class StockLevelController extends Controller
{
    public function index(){
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
            ->paginate($request->per_page ?? 20);

        return StockLevelResouurce::collection($stockLevels);
    }
}
