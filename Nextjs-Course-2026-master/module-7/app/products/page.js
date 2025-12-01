
import { getProductData } from "@/actions";
import React from "react";
import {
  Calendar,
  DollarSign,
  Package,
  Search,
  ArrowLeft,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

const ProductPage = async ({ searchParams }) => {

  const query = searchParams?.query || "";
  const searchType = searchParams?.searchType || "both";

  
  const products = await getProductData(query, searchType);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(parseFloat(price));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header with Search Info */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-white">Product Catalog</h1>
              {query && (
                <div className="flex items-center mt-2 space-x-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <p className="text-gray-400">
                    Search results for:{" "}
                    <span className="text-white font-medium">"{query}"</span>
                    {searchType !== "both" && (
                      <span className="text-gray-500 ml-1">
                        in {searchType}
                      </span>
                    )}
                  </p>
                </div>
              )}
              <p className="text-gray-400 mt-1">
                {query
                  ? `Found ${products?.length || 0} matching results`
                  : `Discover our collection of ${
                      products?.length || 0
                    } unique products`}
              </p>
            </div>
            <Link
              href="/"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>New Search</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 py-8">
        {/* Show search info if there's a query */}
        {query && (
          <div className="mb-6 p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300">
                Searching for "{query}" in{" "}
                {searchType === "both" ? "title and description" : searchType}
              </span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products?.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group overflow-hidden"
            >
              {/* Product Image Placeholder */}
              <div className="h-48 bg-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-600/20 group-hover:bg-gray-600/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Package className="w-16 h-16 text-gray-600 group-hover:text-gray-500 transition-colors" />
                </div>
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                  {product.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {product.desc}
                </p>

                {/* Meta Information */}
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(product.createdAt)}</span>
                  </div>

                  <div className="flex items-center text-gray-500 text-xs">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>ID: {product.id}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for No Results */}
        {(!products || products.length === 0) && (
          <div className="text-center py-16">
            {query ? (
              <>
                <Search className="w-24 h-24 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-400 mb-2">
                  No Products Found
                </h3>
                <p className="text-gray-500 mb-6">
                  No products match your search for "{query}". Try different
                  keywords or search terms.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Search className="w-4 h-4" />
                  <span>Try New Search</span>
                </Link>
              </>
            ) : (
              <>
                <Package className="w-24 h-24 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-400 mb-2">
                  No Products Found
                </h3>
                <p className="text-gray-500">
                  Check back later for new products.
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 border-t border-gray-700 mt-16">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-gray-400">
            {query ? (
              <>
                Search Results:{" "}
                <span className="text-white font-semibold">
                  {products?.length || 0}
                </span>
                <span className="mx-2">•</span>
                <Link href="/" className="text-blue-400 hover:text-blue-300">
                  View All Products
                </Link>
              </>
            ) : (
              <>
                Total Products:{" "}
                <span className="text-white font-semibold">
                  {products?.length || 0}
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
