PGDMP         :                z            marquee    14.4    14.4 
    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16394    marquee    DATABASE     R   CREATE DATABASE marquee WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE marquee;
                postgres    false            �            1259    16555 	   Companies    TABLE     �   CREATE TABLE public."Companies" (
    company_id character varying(255) NOT NULL,
    company_name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Companies";
       public         heap    postgres    false            �            1259    16402    company    TABLE     �   CREATE TABLE public.company (
    company_id character varying(255) NOT NULL,
    company_name character varying(255) NOT NULL
);
    DROP TABLE public.company;
       public         heap    postgres    false            �          0    16555 	   Companies 
   TABLE DATA           Y   COPY public."Companies" (company_id, company_name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    210   �	       �          0    16402    company 
   TABLE DATA           ;   COPY public.company (company_id, company_name) FROM stdin;
    public          postgres    false    209   :       l           2606    16561    Companies Companies_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."Companies"
    ADD CONSTRAINT "Companies_pkey" PRIMARY KEY (company_id);
 F   ALTER TABLE ONLY public."Companies" DROP CONSTRAINT "Companies_pkey";
       public            postgres    false    210            j           2606    16408    company company_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.company
    ADD CONSTRAINT company_pkey PRIMARY KEY (company_id);
 >   ALTER TABLE ONLY public.company DROP CONSTRAINT company_pkey;
       public            postgres    false    209            �   F  x��T�n�@<K_�{��}�Hy㵤��E��;J�A���V�m�.9æy?X-eq��s�bӎ�T�4D�4`-e����� ]K�7Z6��  ���SW�sӅ�S�X�@5承��ɀ��im�t��X.Ǫ��a��9~4k�R<�5t:#�.v�^Ŵ���KX$x0�z�s3�����z�:�L�婵�*^���8��B~bJ	2��=Zn��������ɢ�8Ua�Y"�˓�5��r�*��C��hO�M蝛+y�U�M�<�J����2�h��B��nO@oU�n�Cf����Ħ&-��Z�%������k�����e�׺Z�0�䙿�ܲ���-ߘ����6��-�J�jIB�GP������G��k�4�S��˃Q���B�eޡ���cj���>z�jſ���ݡ<_u���_�J��.~va9}FhJ묡=c��?��첖V��-7�%��XS�V#[��2��]��;o���O �����}|�X#
�ע��v���Qy�k�5kSM�K��1�/6B���eѫ��g�js3�,ְ�!�gt;2��,Z�eY�
@H$      �      x�3�.-*�2SF\1z\\\ 7��     