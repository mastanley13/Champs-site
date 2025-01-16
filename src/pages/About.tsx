import React, { useEffect, useState } from 'react';

interface AboutContent {
  title: string;
  content: string;
}

export function AboutPage() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">About Champion Dog Products</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Welcome to Champion Dog Products, where our mission is keeping dogs out of the pound and in loving homes like yours. Since our establishment, we've been dedicated to providing professional pet care services and training solutions for champion puppy owners.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Services</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Professional Dog Training</li>
          <li>Grooming Services</li>
          <li>Daycare Facilities</li>
          <li>Quality Pet Products</li>
          <li>Expert Pet Care Advice</li>
        </ul>

        <p className="mb-4">
          At Champion Dog Products, we understand that every dog is unique and deserves personalized attention and care. Our team of experienced professionals is committed to helping you and your furry friend achieve a happy, healthy relationship through our comprehensive services and support.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment</h2>
        <p className="mb-4">
          We're dedicated to providing the highest quality services and products to help strengthen the bond between you and your pet. Whether you're a new puppy owner or have years of experience, we're here to support you every step of the way.
        </p>
      </div>
    </div>
  );
} 