<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStockMovementRequest;
use App\Models\Product;
use App\Services\StockMovementService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StockMovementController extends Controller
{
    public function store(
        StoreStockMovementRequest $request,
        StockMovementService $service
    ): JsonResponse {
        $tenantId = $request->attributes->get('tenant_id');

        $movement = $service->create(
            $request->validated(),
            $tenantId
        );

        return response()->json([
            'message' => 'Stock movement created successfully.',
            'data' => $movement,
        ]);
    }

    public function history(Request $request,string $sku){

       Product::where()

    }
}
