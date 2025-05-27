/*
  # Initial Schema Setup for We Can Trust You NGO

  1. New Tables
    - `donors` - Store donor information and donation history
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `name` (text)
      - `phone` (text)
      - `created_at` (timestamp)

    - `donations` - Track individual donations
      - `id` (uuid, primary key)
      - `donor_id` (uuid, foreign key)
      - `amount` (integer)
      - `type` (text)
      - `is_recurring` (boolean)
      - `status` (text)
      - `created_at` (timestamp)

    - `programs` - Store program information
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `target` (integer)
      - `current_progress` (integer)
      - `status` (text)
      - `created_at` (timestamp)

    - `testimonials` - Store success stories
      - `id` (uuid, primary key)
      - `name` (text)
      - `role` (text)
      - `quote` (text)
      - `image_url` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Add policies for public access where needed
*/

-- Create donors table
CREATE TABLE donors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  phone text,
  created_at timestamptz DEFAULT now()
);

-- Create donations table
CREATE TABLE donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_id uuid REFERENCES donors(id),
  amount integer NOT NULL,
  type text NOT NULL,
  is_recurring boolean DEFAULT false,
  status text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create programs table
CREATE TABLE programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text,
  target integer,
  current_progress integer DEFAULT 0,
  status text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  quote text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE donors ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Policies for donors
CREATE POLICY "Donors can view their own data"
  ON donors
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Donors can update their own data"
  ON donors
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Policies for donations
CREATE POLICY "Donors can view their own donations"
  ON donations
  FOR SELECT
  TO authenticated
  USING (donor_id = auth.uid());

CREATE POLICY "Donors can insert donations"
  ON donations
  FOR INSERT
  TO authenticated
  WITH CHECK (donor_id = auth.uid());

-- Policies for programs
CREATE POLICY "Anyone can view programs"
  ON programs
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policies for testimonials
CREATE POLICY "Anyone can view testimonials"
  ON testimonials
  FOR SELECT
  TO anon, authenticated
  USING (true);