<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    private $table            = 'user';
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
        $task = 'add';
        if ($this->editInfo) {
            $task = 'edit-info';
        } elseif ($this->changeLevel) {
            $task = 'change-level';
        } elseif ($this->changePass) {
            $task = 'change-password';
        } elseif ($this->changeCurrentPass) {
            $task = 'change-current-password';
        }

        $id = $this->id;

        $condAvatar   = '';
        $condUserName = '';
        $condEmail    = '';
        $condPass     = '';
        $currentPass = '';
        $condLevel    = '';
        $condStatus   = '';
        $condFullname = '';


        switch ($task) {
            case 'add':
                $condUserName   = "bail|required|between:5,100|unique:$this->table,username";
                $condEmail      = "bail|required|email|unique:$this->table,email";
                $condFullname   = 'bail|required|min: 5';
                $condPass       = 'bail|required|between:5,100|confirmed';
                $condStatus     = 'bail|in:active,inactive';
                $condLevel      = 'bail|in:admin,member';
                $condAvatar     = 'bail|required|image|max:500';
                break;
            case 'edit-info':
                $condUserName   = "bail|required|between:5,100|unique:$this->table,username,$id";
                $condFullname   = 'bail|required|min: 5';
                $condAvatar     = 'bail|image|max:500';
                $condStatus     = 'bail|in:active,inactive';
                $condEmail      = "bail|required|email|unique:$this->table,email,$id";
                break;
            case 'change-password':
                $condPass = 'bail|required|between:5,100|confirmed';
                break;
            case 'change-current-password':
                $currentPass = "bail|required";
                $condPass = 'bail|required|between:5,100|confirmed';
            case 'change-level':
                $condLevel = 'bail|in:admin,member';
                break;
            default:
                break;
        }


        return [
            'username' => $condUserName,
            'email'    => $condEmail,
            'fullname' => $condFullname,
            'status'   => $condStatus,
            'password' => $condPass,
            'current-password' => $currentPass,
            'level'    => $condLevel,
            'avatar'   => $condAvatar
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
