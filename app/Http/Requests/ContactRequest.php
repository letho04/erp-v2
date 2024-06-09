<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    private $table            = 'contact';
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->id;

        $condName       = "bail|required|between:5,100";
        $condPhone      = "bail|required|numeric";
        $condEmail      = 'bail|required|email';
        $condSubject    = "bail|required|between:5,1000";
        $condMessage    = "bail|required|between:5,1000";
        $condNote       = "bail|required|between:1,100";
        $condStatus     = 'bail|in:đã liên hệ,chưa liên hệ';

        if (!empty($id)) { // edit
            $condName       = "bail|required|between:5,100";
            $condPhone      = "bail|required|numeric";
            $condEmail      = 'bail|required|email';
            $condSubject    = "bail|required|between:5,1000";
            $condMessage    = "bail|required|between:5,1000";
            $condNote       = "bail|required|between:1,100";
            $condStatus     = 'bail|in:đã liên hệ,chưa liên hệ';
        }
        return [
            'name'          => $condName,
            'phone'         => $condPhone,
            'email'         => $condEmail,
            'subject'       => $condSubject,
            'message'       => $condMessage,
            'note'          => $condNote,
            'status'        => $condStatus,
        ];
    }

    public function messages()
    {
        return [
            // 'name.required' => 'Name không được rỗng',
            // 'name.min'      => 'Name :input chiều dài phải có ít nhất :min ký tứ',
        ];
    }
    public function attributes()
    {
        return [
            // 'description' => 'Field Description: ',
        ];
    }
}
