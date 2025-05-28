import type { Metadata } from "next";
import React, { Suspense } from 'react';
import Nav from '@/app/components/Navbar/Navbar';
import SeachResultContainer from "@/app/containers/SearchResult";

export const metadata: Metadata = {
  title: "Elite Community CU | Search Results",
};

const SearchResult: React.FC = () => {
  return (
    <div>
      <Nav />
      <Suspense fallback={<div>Loading search results...</div>}>
        <SeachResultContainer />
      </Suspense>
    </div>
  );
};

export default SearchResult;
